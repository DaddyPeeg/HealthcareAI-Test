import { useState } from "react";
import { useRecoilState } from 'recoil';
import Datepicker from "react-tailwindcss-datepicker";
import IconMessage from "@svgs/IconMessage";
import langSnippet from "@utils/LangSnippet";
import CheckButtons from "@components/core/CheckButtons";
import CarrierModal from "@components/pages/main/modals/CarrierModal"
import CheckBox from "@components/core/CheckBox";
import { settingAtom } from '@state/Setting';
import { SettingInterface } from "@types/Setting";


var checkedCarriers = [
  "Ambetter", "UnitedHealthcare", "Anthem", "Centene"
]
const Content = () => {

  const [setting, setSetting] = useRecoilState<SettingInterface>(settingAtom);
  
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  }
  )
  const [carrierModal, setCarrierModal] = useState(false)
  const [carriers, setCarriers] = useState<string[]>([])

  const handleChange = (newValue: any) => {
    
  }

  const handleCheckBox = (item: string) => {
    console.log('item log', item)
  }

  const onCarrierModalClose = () => {
    setCarrierModal(false);
  }

  const onCarrierSave = (items: string[]) => {
    setCarriers([...items]);
    setCarrierModal(false);
  }

  return (
    <div className='content-content'>
      <div className='header-container'>
        <p className='header-title'>Federal<span className='text-2xl text-primary'>Plans</span></p>
      </div>
      <div className='form-container'>
        <div className='form-content'>
          <div className="w-full">
            <p className='form-label'>{langSnippet.mission.label}</p>
            <textarea rows={6} placeholder={langSnippet.mission.placeholder} className='form-input'>
            </textarea>
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.tone.label}</p>
            <input type='text' placeholder={langSnippet.tone.placeholder} className="form-input" />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.plan.label}</p>
            <CheckButtons
              options={langSnippet.plan.options}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.carrier.label}</p>
            <div className="form-carrier-container">
              <div className='checked-carriers-container'>
                {
                  langSnippet.carrier.options.map((carrier: string, idx: number) => {
                    return (
                      <CheckBox
                        checked={checkedCarriers.includes(carrier)}
                        label={carrier}
                        handleCheckBox={handleCheckBox}
                        key={idx}
                      />
                    )
                  })
                }
              </div>
              <button className="btn-primary-lg btn-outlined" onClick={() => setCarrierModal(true)}>+ Add Carriers</button>
            </div>
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.recommendedPlan.label}</p>
            <CheckButtons
              options={langSnippet.recommendedPlan.options}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.chatbotQuestion.label}</p>
            <input type='text' placeholder={langSnippet.chatbotQuestion.placeholder} className="form-input" />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.summary.label}</p>
            <input type='text' placeholder={langSnippet.summary.placeholder} className="form-input" />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.exMessage.label}</p>
            <textarea rows={6} placeholder={langSnippet.exMessage.placeholder} className='form-input'>
            </textarea>
          </div>
          <div className="inline-form-container">
            <div className='inline-form-element'>
              <p className="mb-2">First name</p>
              <input type='text' placeholder='Ex: John' className="form-input" />
            </div>
            <div className='inline-form-element'>
              <p className="mb-2">Last name</p>
              <input type='text' placeholder='Ex: John' className="form-input" />
            </div>
          </div>
          <div className="inline-form-container">
            <div className='inline-form-element'>
              <p className="mb-2">Date of Birth</p>
              <Datepicker
                value={date}
                onChange={handleChange}
                asSingle={true}
                useRange={false}
                inputClassName="form-input"
                placeholder={'Select date'}
              />
            </div>
            <div className='inline-form-element'>
              <p className="mb-2">DOB income</p>
              <select placeholder='0-10k/year' className="form-input hci-select">
                <option>0-10k/year</option>
              </select>
            </div>
          </div>
          <div className="inline-form-container">
            <div className='inline-form-element'>
              <p className="mb-2">Number of Dependents</p>
              <select placeholder='0' className="form-input hci-select">
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="inline-form-element"></div>
          </div>
          <div className="divider-x"></div>
          <div className="form-submit-container">
            <div className="flex flex-1 w-full relative">
              <input type='text' placeholder="Hi how may i help you, please enter..." className="form-input-primary" />
              <div className='absolute top-4 left-4'>
                <IconMessage />
              </div>
            </div>
            <div className="flex md:w-auto w-full">
              <button className='btn-submit'>Test welcome message</button>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <p className='footer-text'>© 2024 Obamacare AI. All Rights Reserved.</p>
      </div>
      <CarrierModal
        className="w-full"
        open={carrierModal}
        selectedCarriers={carriers}
        options={langSnippet.carrier.options}
        onClose={onCarrierModalClose}
        onSave={onCarrierSave}
      />
    </div>
  )
}

export default Content;