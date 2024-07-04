import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { settingAtom } from '@state/Setting';
import { appStateAtom } from '@state/AppState';
import icon1 from '@img/icon1.jpg';
import IconRotateLeft from '@svgs/IconRotateLeft';
import ApiKeyModal from '@components/pages/main/modals/ApiKeyModal';
import ExcelExploreModal from '@components/pages/main/modals/ExcelExploreModal';
import { SettingInterface } from '@types/Setting';
import API from '@utils/API';
import { AgentInterface } from '@types/Agent';
import { defaultAgent } from '@utils/Default'
import { AppStateInterface } from '@types/AppState';

const clientId = import.meta.env.VITE_GHL_CLIENT_ID;

const Sidebar = () => {

  const [setting, setSetting] = useRecoilState<SettingInterface>(settingAtom);
  const [apiKeyModal, setApiKeyModal] = useState(false)
  const [expModal, setExpModal] = useState(false)
  const [agent, setAgent] = useState<AgentInterface>(defaultAgent)
  const [appState, setAppState] = useRecoilState<AppStateInterface>(appStateAtom)

  useEffect(() => {
    const fetchAgent = () => {

      const apiClient = new API('')
      apiClient.get('agent', {
        client_id: clientId
      })
        .then((response: any) => {
          if (!response) {
            return;
          }
          const data = response.location
          setAgent({
            agentId: data.companyId,
            companyName: data.name,
            firstName: data.firstName,
            lastName: data.lastName,
            logoUrl: data.logoUrl,
            address: data.business.address,
            city: data.business.city,
            country: data.business.country,
            state: data.business.state,
            postalCode: data.business.postalCode,
            email: data.business.email,
            registerDate: (new Date(data.dateAdded)).toLocaleString('en-US', { year: 'numeric', month: 'short' })
          })
          setSetting({
            ...setting,
            agentFirstName: data.firstName,
            agentLastName: data.lastName,
          })
          setAppState({
            ...appState,
            connected: !appState.connected
          })
        })
        .catch((error: any) => {
          console.log('error', error)
        })
    }
    fetchAgent()
  }, [])

  const connectToGhl = () => {
    if (appState.connected) {
      return;
    }
    let backendUrl = import.meta.env.VITE_BACKEND_URL;
    let ghlUrl = import.meta.env.VITE_GHL_BASE_URL;
    let clientId = import.meta.env.VITE_GHL_CLIENT_ID;
    let scope = '&scope=conversations/message.readonly conversations/message.write users.readonly users.write locations.readonly contacts.readonly contacts.write'
    let oauthUrl = ghlUrl + 'oauth/chooselocation?response_type=code&' + 'client_id=' + clientId + '&redirect_uri=' + backendUrl + 'oauth/callback&' + scope
    window.location.href = oauthUrl
  }

  const handleApiConnect = () => {
    setApiKeyModal(false)
  }

  const handleExpSave = () => {
    setExpModal(false)
  }

  return (
    <div className='sidebar-content'>
      <div className='sidebar-header'>
        <p className='sidebar-title'>Agency information</p>
      </div>
      <div className='account-container'>
        <div className={appState.connected ? 'show' : 'hidden'}>
          <div>
            {agent.logoUrl != '' && <img src={agent.logoUrl} className='account-avatar' />}
          </div>
          <p className='account-name'>{agent.firstName + ' ' + agent.lastName}</p>
          <p className='account-text'>{agent.companyName} company</p>
          <p className='account-text'>{agent.address}, {agent.city}</p>
          <p className='account-text'>{agent.country}, {agent.state}, {agent.postalCode}</p>
          <p className='account-text'>Contact: {agent.email}</p>
          <p className='account-text'>Member Since: {agent.registerDate}</p>

        </div>
      </div>
      <button className={'btn ' + (appState.connected ? 'btn-primary-disabled' : 'btn-primary')} onClick={() => connectToGhl()}>
        <p className={appState.connected ? 'btn-text-disabled' : 'btn-text'}>{appState.connected ? 'Connected' : 'Connect to GHL'}</p>
      </button>
      <button className='btn btn-primary' onClick={() => setApiKeyModal(true)}>
        <p className='btn-text'>Add OpenAI API key</p>
      </button>
      <button className='btn btn-primary' onClick={() => setExpModal(true)}>
        <p className='btn-text'>Health sherpa excel exports</p>
      </button>
      <div className='flex mt-8'>
        <button className='inline'><IconRotateLeft /></button>
        <span className='ml-2 font-medium'>History</span>
      </div>
      <div className="divider-x"></div>
      <div className='sidebar-history'>
        <p className='truncate ... py-1'>How should the chatbot summarize How should the chatbot summarize How should the chatbot summarize</p>
      </div>
      <ApiKeyModal
        open={apiKeyModal}
        onClose={() => setApiKeyModal(false)}
        onConnect={handleApiConnect}
      />
      <ExcelExploreModal
        open={expModal}
        onClose={() => setExpModal(false)}
        onSave={handleExpSave}
      />
    </div>
  )
}

export default Sidebar;