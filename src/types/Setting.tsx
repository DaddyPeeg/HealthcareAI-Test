export interface SettingInterface {
  openAiAPIKey: OpenAiAPIKeyInterface | null
  excelExplore: ExcelExploreInterface | null
  id: string,
  formatName: string
  mission: string
  tone: string
  plan: string
  carriers: string[]
  recommendedPlan: number
  chatbotQuestion: string
  summary: string
  exMessage: string
  firstName: string
  lastName: string
  dob: string
  income: number
  dependents: number
  zipCode: number
  agentFirstName: string
  agentLastName: string
}

export interface OpenAiAPIKeyInterface {
  apiKey: string
  secretKey: string
  whiteLink: boolean
  logoUrl: string
  ghlBusinessIT: string
  ghlAPI: string
}

export interface ExcelExploreInterface {
  description: string
  type: number
  fileUrl: string
}