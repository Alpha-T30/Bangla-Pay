import Style from './userinfo.module.scss' ; 

export default function UserInfo() {
    return (
        <div className={Style.userinfo}>
            <div className={Style.wrapper}>
                <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/217652499_361743368803513_1028260596380241694_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3vDQpMpUk08AX-J8KO5&_nc_ht=scontent.fdac31-1.fna&oh=e110377930e8c5a0676a18b26a35794c&oe=616EE863" alt="" />
                <div className={Style.item}>
                    <span>Name:</span>
                    <span>{"Enamul Haque"}</span>
                </div>
                <div className={Style.item}>
                    <span>Adress:</span>
                    <span>{"Rajshahi City"}</span>
                </div>
                <div className={Style.item}>
                    <span>Phone:</span>
                    <span>{"01611126730"}</span>
                </div>
            </div>

            
        </div>
    )
}
