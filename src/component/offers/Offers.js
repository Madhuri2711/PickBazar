import React,{useState} from 'react'
import './Offer.css'

const Offers = () => {
    const [copiedLabel, setCopiedLabel] = useState('');

    const Data = [
      {
        id: '1',
        title: '5OFF2',
        color: '#ef8c5f',
      },
      {
        id: '2',
        title: '10OFF',
        color: '#3a9fe7',
      },
      {
        id: '3',
        title: '4OF67',
        color: '#70C1B3',
      },
      {
        id: '4',
        title: '9OF55',
        color: '#b07cdf',
      },
      {
        id: '5',
        title: '09OFF5',
        color: '#e9b2bd',
      },
      {
        id: '6',
        title: 'GF543',
        color: '#eb6e6f',
      },
      {
        id: '7',
        title: 'GbH12',
        color: '#ea8eb0',
      },
      {
        id: '8',
        title: '60FGH',
        color: '#e3e373',
      },
    ];
  
    const handleCopyClick = (title) => {
      navigator.clipboard.writeText(title);
      setCopiedLabel(title);
    };
  
  
  return (
  <>

<div className='container offer'>
        <div className='row'>
          {Data.map((item) => (
            <div className='col-md-3 mt-9' key={item.id}>
              <div style={{ backgroundColor: item.color }} className='card datacard '>
                <div className='databody m-4 py-3 px-3'>
                <div className='card-body pt-4'>
                  <h2 className='arr_title'>{item.title}</h2>
                  </div>
                </div>
              </div>
              <div className='footer d-flex mx-2 '>
                
                <div className='footer_title'>{item.title}</div>
                <div
                  className='copy '
                  onClick={() => handleCopyClick(item.title)}
                >
                  {copiedLabel === item.title ? 'Copied!' : 'Copy'}
                </div>
                </div>
               
              </div>
           
            
          ))}
        </div>
      </div>

  </>
  )
}

export default Offers
