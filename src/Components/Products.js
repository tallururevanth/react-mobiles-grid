import React from 'react';
import Design from './Design';

class Products extends React.Component{
  constructor(){
    super();
    this.state={
      mobiles:[
        {
          id:1,
          name:'APPLE iPhone 14 (Midnight, 128 GB)',
          img_path:'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
          mrp:'₹79,900',
          selling:'₹73,990',
          rating:'4.9',
          highlights:['128 GB ROM','15.49 cm (6.1 inch) Super Retina XDR Display','12MP + 12MP | 12MP Front Camera','A15 Bionic Chip, 6 Core Processor Processor']
  
      },{
        id:2,
        name:'APPLE iPhone 14 (Starlight, 128 GB)',
        img_path:'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
        mrp:'₹79,900',
        selling:'₹73,990',
        rating:'4.5',
        highlights:['128 GB ROM','15.49 cm (6.1 inch) Super Retina XDR Display','12MP + 12MP | 12MP Front Camera','A15 Bionic Chip, 6 Core Processor Processor']
  
    },{
      id:3,
      name:'APPLE iPhone 13 ((PRODUCT)RED, 128 GB)',
      img_path:'https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70',
      mrp:'₹79,900',
      selling:'₹73,990',
      rating:'4.7',
      highlights:['128 GB ROM','15.49 cm (6.1 inch) Super Retina XDR Display','12MP + 12MP | 12MP Front Camera','A15 Bionic Chip, 6 Core Processor Processor'],
  
  },{
    id:4,
    name:'APPLE iPhone 13 ((PRODUCT)RED, 128 GB)',
    img_path:'https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70',
    mrp:'₹79,900',
    selling:'₹73,990',
    rating:'4.7',
    highlights:null,

},{
  id:5,
  name:'APPLE iPhone 13 ((PRODUCT)RED, 128 GB)',
  img_path:'https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70',
  mrp:'₹79,900',
  selling:'₹73,990',
  rating:'4.7',
  highlights:['128 GB ROM','15.49 cm (6.1 inch) Super Retina XDR Display','12MP + 12MP | 12MP Front Camera','A15 Bionic Chip, 6 Core Processor Processor'],

},{
  id:6,
  name:'APPLE iPhone 13 ((PRODUCT)RED, 128 GB)',
  img_path:'https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70',
  mrp:'₹79,900',
  selling:'₹73,990',
  rating:'4.7',
  highlights:['128 GB ROM','15.49 cm (6.1 inch) Super Retina XDR Display','12MP + 12MP | 12MP Front Camera','A15 Bionic Chip, 6 Core Processor Processor'],

}]
    }
    
      
  }
  render(){
    const {mobiles} = this.state;
    
    return(
    <div className='container'>
      <div className='row'>
          {mobiles.map((data, i)=>{
              return<Design key={i} mobiledata={data}/>

            })
          }

          </div>
    </div>)
  }
}
export default Products;