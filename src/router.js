import productList from './components/product/productList';
import addProduct from './components/product/addProduct';
import outProduct from './components/product/outProduct';
import errorpage from './components/errorpage';

export const routes=[
    { path: '/', redirect: '/urunler' },
    {path:"/urunler",component:productList},
    {path:"/urun-girisi",component:addProduct},
    {path:"/urun-cıkısı",component:outProduct},
    {path:"*",component:errorpage}
]