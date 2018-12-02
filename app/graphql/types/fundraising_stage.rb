module Types
  class FundraisingStage < Types::BaseEnum
    value(
      'RESEARCHING',
      "Researching investor's background, expertise, and potential introduction paths.",
      value: 'researching'
    )

    value(
      'CONTACTED',
      'Reached out to investor via warm introduction or cold email.',
      value: 'contacted'
    )
    value(
      'INITIAL_MEETING',
      'Scheduled initial in-person meeting with the investor.',
      value: 'initial_meeting'
    )
    value(
      'PARTNER_MEETINGS',
      "Meeting with multiple partners from the investor's firm.",
      value: 'partner_meetings'
    )
    value(
      'RECEIVED_TERM_SHEET',
      'Received term sheet from the investor.',
      value: 'received_term_sheet'
    )
    value(
      'DUE_DILIGENCE',
      'Going through due diligence from the investor.',
      value: 'due_diligence'
    )

    value(
      'CLOSED_INVESTMENT',
      'Received money into bank account.',
      value: 'closed_investment'
    )
    value(
      'TERMINATED',
      'Investor is no longer interested in moving forward.',
      value: 'terminated'
    )
  end
end
