import Main from '@pages/Main';
import Loader from '@components/common/Loader'
import { appStateAtom } from './state/AppState';
import { useRecoilState } from 'recoil';
import { AppStateInterface } from '@types/AppState';
import ToastContainer from '@components/common/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [appState, setAppState] = useRecoilState<AppStateInterface>(appStateAtom)
  return (
    <>
      <ToastContainer />
      <Main />
      <Loader isLoading={appState.isLoading} />
    </>
  )
}