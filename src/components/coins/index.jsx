import './coins.scss'
import coins from "assets/icons/coins.gif";

const Coins = () => {
  return (
    <div className='coins-wrapper'>
        <div className='coins'>
            <img src={coins} alt="" />
        </div>
    </div>
  )
}

export default Coins