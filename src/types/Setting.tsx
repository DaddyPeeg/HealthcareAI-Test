export interface SettingInterface {
  openAiAPIKey: OpenAiAPIKeyInterface | null
  excelExplore: ExcelExploreInterface | null
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