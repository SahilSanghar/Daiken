import Dashboard from '@/Dashboard'
import Data from '@/Data'
import Options from '@/Options'

const Account = () => {
return (
    <div className='h-[154vh] bg-sky-600 text-white'>
        <div className="h-[8vh] bg-white"></div>
        <Dashboard />
        <Data />
        <Options />
    </div>
)
}

export default Account