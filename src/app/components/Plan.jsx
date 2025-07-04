import React from 'react'
import PricingCard from './PricingCard'

function Plan() {
  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 5,
      pricePeriod: 'Month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      isBestPlan: false,
      features: [
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: false },
        { text: 'Enter your checklist here.', isActive: false },
      ]
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      price: 37,
      pricePeriod: 'Month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      isBestPlan: true,
      features: [
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: false },
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 55,
      pricePeriod: 'Month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      isBestPlan: false,
      features: [
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: false },
        { text: 'Enter your checklist here.', isActive: false },
      ]
    }
  ]

  return (
<section className="h-auto flex justify-center items-center md:mt-32 mt-6">
  <div className="max-w-7xl px-5 mx-auto sm:px-4 lg:px-8 h-full w-full">
    {/* Horizontal scroll wrapper */}
    <div className="relative overflow-x-auto md:overflow-x-visible hide-scrollbar pt-5 md:pt-0">
      {/* Scrollable content */}
      <div
        className="
          flex  flex-nowrap md:pb-4
          md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:flex-none
          max-w-5xl mx-auto
          pr-12
        "
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="w-full max-w-sm flex-shrink-0 min-w-0 md:max-w-none h-full relative"
          >
            <div className="relative">
              <PricingCard plan={plan} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



  )
}

export default Plan

