import Header from './_component/Header';
 import SideNav from './_component/SideNav';

export default function DashboardLayout({ children }) {
  return (
    <>
        
    
     <div className="h-screen flex flex-col">
      {/* Top Header */}
      <Header />
     
      <div className="flex ">
        <SideNav />
         {children}
      </div>
      


    </div>
    </>
  );
}
