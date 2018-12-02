module Types
  class FundraisingStage < Types::BaseEnum
    value 'RESEARCHING', "Researching investor's background, expertise, and " \
      "potential introduction paths."

    value 'CONTACTED', 'Reached out to investor via warm introduction or ' \
      'cold email.'
    value 'INITIAL_MEETING', 'Scheduled initial in-person meeting with the investor.'
    value 'PARTNER_MEETINGS', "Meeting with multiple partners from the investor's firm."
    value 'RECEIVED_TERM_SHEET', 'Received term sheet from the investor.'
    value 'DUE_DILIGENCE', 'Going through due diligence from the investor.'

    value 'CLOSED_INVESTMENT', 'Received money into bank account.'
    value 'TERMINATED', 'Investor is no longer interested in moving forward.'
  end
end
