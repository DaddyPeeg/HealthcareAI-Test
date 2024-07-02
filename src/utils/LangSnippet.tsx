const langSnippet = {
  mission: {
    label: "What is your company's mission statement and what are your chatbot's capabilities? Be clear and concise.",
    placeholder: "Ex: Healthcare insurance is complicated for no reason. We use AI to find the best plans for your specific situation. This chatbot acts like a personal insurance agent."
  },
  tone: {
    label: "Describe the chatbot's ideal tone and style.",
    placeholder: "Ex: Professional, friendly, and informative. Avoid slang."
  },
  plan: {
    label: "Which plan types should the chatbot prioritize presenting?",
    options: ["Silver(Recommended)", "Gold", "Platinum", "Bronze", "Extended bronze"]
  },
  carrier: {
    label: "Health Insurance Carriers Selection",
    options: ["Aetna", "Blue Cross Blue Shield", "Cigna", "Humana", "Ambetter", "UnitedHealthcare", "Anthem", "Centene", "Molina Healthcare", "Health Care Service Corporation(HCSC)"]
  },
  recommendedPlan: {
    label: "How should the chatbot present plan recommendations?",
    options: ["One best plan and reason why", "The best 3 plans"]
  },
  chatbotQuestion: {
    label: "Are there any specific questions or statements you want the chatbot to ask?",
    placeholder: "Ex: Would you like to see if you are eligible for $0/month ?"
  },
  summary: {
    label: "How should the chatbot summarize messages to users? Be specific!",
    placeholder: "Ex: Keep summaries brief and easy to read. Don't repeat info."
  },
  exMessage: {
    label: "If you have an example of a perfect welcome message, please paste it below.",
    placeholder: "Ex: Hey [Customer], this is [Agent Name] with ACA benefits center.\n\nThank you for applying for $0 or low cost health plans.\nI found $0 plan [Insurance plan with carrier name] in your zip code [zipcode].  Are their any medications or doctors that you'd like to stay aligned with before enrolling you in this plan?"
  },

}

export default langSnippet;