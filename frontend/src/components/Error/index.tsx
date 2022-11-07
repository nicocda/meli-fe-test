import { Log } from '../../Helper/Log'
import './index.scss'

export const Error = ({ error }: { error: string }) => {

    if (!error)
        return (<div className='error-message'>{'Not error specified'}</div>)

    Log('inside Error ' + error);
    return (
        <div className='error-message' data-testid='error'>{error}</div>
    )
}
