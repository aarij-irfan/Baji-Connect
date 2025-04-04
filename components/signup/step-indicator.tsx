interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-sm font-medium text-gray-500">
        Step {currentStep} of {totalSteps - 1}
      </div>
      <div className="flex space-x-1">
        {Array.from({ length: totalSteps - 1 }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index + 1 <= currentStep ? "bg-green-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

