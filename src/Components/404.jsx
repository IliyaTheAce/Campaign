import React from 'react';

const NotFoundPage = () => {
    return (
     <div className={'text-lg md:text-3xl h-full w-full items-center justify-center flex flex-col'}>
         <h1 className={'text-3xl mb-5 md:text-5xl'}>404 صفحه مورد نظر یافت نشد.</h1>
         <p>آدرس وارد شده صحیح نیست!</p>
     </div>
    );
};

export default NotFoundPage;
