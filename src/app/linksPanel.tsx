import { FC } from "react";

export const LinksPanel: FC = () => {
    return (
        <div className="ml-[170px] mr-[170px] mt-[92px] flex flex-row bg-green-200 md:bg-gray-500 lg:bg-red-600 xl:bg-blue-600 2xl:bg-white content-start justify-between">
            <div className="mt-10 ml-10 flex flex-row h-16 grid gap-9 content-start">
                <div>Home</div>
                <div>Contacts</div>
                <div>Categories</div>
            </div>
            <div className="mt-10 mr-10">Sign in</div>
        </div>
    );
}