import React,{useState} from 'react'

const data = {
  India: ['Madhya Pradesh', 'Maharashtra', 'Karnataka'],
  USA: ['California', 'Texas', 'New York'],
  Canada: ['Ontario', 'Quebec', 'Alberta']
};
const Dropdown = () => {
     const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const handleCountryChange=(e)=>{
    e.preventDefault()
    setCountry(e.target.value)
    setState('')
  }
  return (
    <div>
      <select  value={country} onChange={handleCountryChange}>
        <option value="">Select country</option>
        {
            Object.keys(data).map((c)=>(<option key={c} value={c}>{c}</option>))
        }
      </select>
      <select value={state} onChange={(e)=>setState(e.target.value)} disabled={!country}>
        <option value="">Select State</option>
        {
            country && data[country].map((s)=>(
                <option key={s} value={s}>{s}</option>
            ))
        }
      </select>
    </div>
  )
}

export default Dropdown
