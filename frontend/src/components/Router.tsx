
import { Routes, Route, } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { ItemList } from './ItemList';
import { RouterLayout } from './Router/RouterLayout';

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<RouterLayout />} >
                    <Route path="/" element={<></>} />
                    <Route path={"/api/items"} element={<ItemList />} />

                    <Route path={"/api/items/:id"} element={<ItemDetail />} />
                </Route>
            </Routes>
        </>
    )
}
