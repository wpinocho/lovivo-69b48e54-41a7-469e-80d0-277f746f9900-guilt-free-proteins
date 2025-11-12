interface MacrosTableProps {
  protein: string
  carbs: string
  fats: string
  calories: string
}

export const MacrosTable = ({ protein, carbs, fats, calories }: MacrosTableProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="grid grid-cols-4 divide-x divide-border">
        <div className="p-3 text-center">
          <div className="text-2xl font-bold text-accent">{protein}g</div>
          <div className="text-xs text-muted-foreground mt-1">Protein</div>
        </div>
        <div className="p-3 text-center">
          <div className="text-2xl font-bold text-foreground">{carbs}g</div>
          <div className="text-xs text-muted-foreground mt-1">Carbs</div>
        </div>
        <div className="p-3 text-center">
          <div className="text-2xl font-bold text-foreground">{fats}g</div>
          <div className="text-xs text-muted-foreground mt-1">Fats</div>
        </div>
        <div className="p-3 text-center">
          <div className="text-2xl font-bold text-secondary-foreground">{calories}</div>
          <div className="text-xs text-muted-foreground mt-1">Calories</div>
        </div>
      </div>
    </div>
  )
}
