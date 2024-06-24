import { SettingInterface, OpenAiAPIKeyInterface, ExcelExploreInterface } from '@types/Setting';

export const defaultSetting: SettingInterface = {
  openAiAPIKey: null,
  excelExplore: null,
  mission: '',
  tone: '',
  plan: 'Silver(Recommended)',
  carriers: ['Aetna'],
  recommendedPlan: 0,
  chatbotQuestion: '',
  summary: '',
  exMessage: '',
  firstName: '',
  lastName: '',
  dob: '1970-01-01',
  income: 0,
  dependents: 0
}

export const defaultOpenAiAPIKey: OpenAiAPIKeyInterface = {
  apiKey: '',
  secretKey: '',
  whiteLink: '',
  logoUrl: '',
  ghlBusinessIT: '',
  ghlAPI: ''
}

export const defaultExcelExplore: ExcelExploreInterface = {
  description: '',
  type: 0,
  fileUrl: ''
}