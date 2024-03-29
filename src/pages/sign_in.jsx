import React , { useState } from 'react'
import pic2 from '../assets/pic2.png'
import pic from '../assets/pic1.jpg'
import { Link } from 'react-router-dom';


function Sign_in() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sexe, setSexe] = useState('');
    const[day, setDay] = useState('');
    const[month, setMonth] = useState('');
    const [year, setYear] = useState('');
    
    const handleSubmit = (event) => {
      console.log('Email:', email);
      console.log('Nom complet:', name);
      console.log('Sexe:', sexe);
      console.log('Date de Naissance:', day , month,year);

    }

    const getYears = () => {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(year);
      }
      return years;
    };
   

    
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSexeChange = (event) => {
    setSexe(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
   
    
  return (
  
      <div className="w-full min-h-screen flex items-start ">
      <div className="w-1/2 h-screen flex items-center justify-center">
      <img src={pic} alt=''  className="h-full w-full object-cover"/>
     </div>
    <div  className="flexbox flex-col w-1/2 h-screen flex items-center justify-center  ">
    <div className=" h-12 w-full items-center bg-customBlue opacity-5 p-2 shadow-2xl rounded-full filter blur-md  "></div>
     <div className="flex flex-col w-[727px] h-[901px] items-center justify-evenly    bg-white  shadow-2xl  rounded-2xl ">
     
     <img
      src={pic2}
      alt="Logo" 
      className='w-15 h-9 mt-8 mb-9 px-0 py-0  bg-transparent '
     ></img>
      < div className='flex flex-col justify-between items-center gap-4 py-4'>
      <div class="w-[277px] h-[29px] text-center text-slate-700 text-3xl font-extrabold font-['Raleway']">Créer un compte </div>
     <div class="w-[449px] h-[61px] text-center text-black text-[15px] font-medium font-['Raleway']">Créez un compte en remplissant le formulaire  avec vos informations personnelles
     
</div> 
</div> 

   <div className=' flex flex-col  gap-6 items-center ' >
   <div className='flex gap-4 justify-between '>
    <input
     id='text'
     type ="name"
     value={name}
     onChange={handleNameChange}
     placeholder='Votre nom complet '
      className="w-[320px] h-20 bg-slate-200  rounded-[10px] text-black  text-xl font-['SF Pro'] text-center"
     />
     <div >
     <select
            className=" w-[160px] h-20 block bg-slate-200  rounded-[10px] py-2 px-3 text-gray-700 leading-tight e"
            id="gender"
            value={sexe}
            onChange={handleSexeChange}
          >
            <option value="m">Homme</option>
            <option value="f">Femme</option>
            
          </select>
     </div>
     </div>

    <div className='flex  justify-between gap-4 '>
     <label>
      
     <select
      className="w-[156px] h-20  pl-2 bg-slate-200 rounded-[10px]"
      value={day}
       placeholder='Jour'
      onChange={handleDayChange}
    >   
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
         <option value="13">13</option>
         <option value="14">14</option>
         <option value="15">15</option>
         <option value="16">16</option>
         <option value="17">17</option>
         <option value="18">18</option>
         <option value="19">19</option>
         <option value="20">20</option>
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
         <option value="26">26</option>
         <option value="27">27</option>
         <option value="28">28</option>
         <option value="29">29</option>
         <option value="30">30</option>
         <option value="31">31</option>
  </select>
     </label>
     <label>
    
    <select
      className="w-[156px] h-20  pl-2 bg-slate-200 rounded-[10px]"
      value={month}
      onChange={handleMonthChange}
    >
      <option value="1">Janvier</option>
      <option value="2">Février</option>
      <option value="3">Mars</option>
      <option value="4">Avril</option>
      <option value="5">Mai</option>
      <option value="6">Juin</option>
      <option value="7">Juillet</option>
      <option value="8">Aout</option>
      <option value="9">Septembre</option>
      <option value="10">Octobre</option>
      <option value="11">Novembre</option>
      <option value="12">Décembre</option>
    
    </select>
    

  </label>
  <select
              className="w-[156px] h-20  pl-2 bg-slate-200 rounded-[10px]"
              value={year}
            
              onChange={handleYearChange}
              id="year"
            >
              
              {getYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
  </div>
  <input
     id='email'
     type ="email"
     value={email}
     onChange={handleEmailChange}
     placeholder='Entrez votre email '
     className='w-[510px] h-20  bg-slate-200 rounded-[10px] text-center text-xl'
     />

       <div className='flex items-center '>
     <Link to={"/SignIn/Verification"}>   
      <button onClick={handleSubmit}
       className="w-[264px] h-[65px] mb-14  bg-customBlue rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]  justify-center items-center gap-2 inline-flex">
      Continuer
     </button>
     </Link>  
     </div>
     < div className='flex  flex-col justify-evenly mb-8  '>
     <div className="w-[397px] h-[0px] opacity-40 border border-slate-700 mb-2"></div>
    <div className='flex  justify-between '>
    <div className="text-black text-opacity-40 text-[15px] font-['SF Pro']">  Vous avez pas encore de compte? </div>
          <Link to={"/LogIn"}>
              <button
                className="text-slate-700  text-[15px] font-['SF Pro']  text-[15px] "
              >
              Se connecter 
              </button>
              </Link>
     </div>
     </div>
     </div>
     
     </div>
     <div className="h-12 w-full items-center bg-customRed opacity-10 p-4 shadow-2xl rounded-full filter blur-md  "></div>
    </div>
    

     </div> 
    
  )
}

export default Sign_in
