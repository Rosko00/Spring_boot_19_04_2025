function Result({value}) {
    if (value !== null)
        return <div className="Result">Výsledok: {value}</div>;
    return null;    
}

export default Result;