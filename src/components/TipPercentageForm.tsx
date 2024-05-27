const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormTypeProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({setTip} : TipPercentageFormTypeProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Choose a tip:</h3>

            <form>
                {tipOptions.map(tipMap => (
                    <div 
                    className="flex gap-2"
                    key={tipMap.id}>
                        <label htmlFor={tipMap.id}>{tipMap.label}</label>
                        <input
                            id={tipMap.id}
                            type="radio"
                            name="tip"
                            value={tipMap.value}
                            onChange={e => setTip(Number(e.target.value))}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
} 