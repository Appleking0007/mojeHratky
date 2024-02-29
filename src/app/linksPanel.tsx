import { FC } from "react";

export const LinksPanel: FC = () => {
    return (
        <div className="ml-40 mr-40 mt-20 flex flex-row bg-gray-300 content-start justify-between">
            <div className="mt-10 ml-10 flex flex-row h-16 grid gap-9 content-start">
                <div>Home</div>
                <div>Contacts</div>
                <div>Categories</div>
            </div>
            <div className="mt-10 mr-10">Sign in</div>
        </div>
    );
}