import { Log } from '../../Helper/Log'
import './index.scss'

export const Error = ({ error }: { error: string }) => {

    Log('inside Error ' + error);
    return (
        <div className='error-message'>{error}</div>
    )
}
