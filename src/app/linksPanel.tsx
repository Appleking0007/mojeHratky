import { FC } from "react";

export const LinksPanel: FC = () => {
    return (
        <div className="ml-[170px] mr-[170px] mt-[92px] flex flex-row bg-[#E6E6E6] content-start justify-between">
            <div className="mt-10 ml-10 flex flex-row h-16 grid gap-9 content-start">
                <div>Home</div>
                <div>Contacts</div>
                <div>Categories</div>
            </div>
            <div className="mt-10 mr-10">Sign in</div>
        </div>
    );
}