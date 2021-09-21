import Navbar from '../../Components/NavBar/Navbar';
import Payment from '../../Components/Payment/Payment';
import Table1 from '../../Components/Table/Table';
import UserInfo from '../../Components/UserInfo/UserInfo';
import Style from './home.module.scss' ; 


export default function Home() {
    return (
        <div className={Style.home}> 
             <Navbar></Navbar>
              
             <div className={Style.container}>
                 <section className={Style.firstSection}>
                     <UserInfo></UserInfo>
                     <Payment></Payment>

                 </section>

                 <section className={Style.sectionTwo}>

                     < Table1></Table1>
                 </section>
                 
             </div>

        </div>
    )
}
