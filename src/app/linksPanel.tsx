import { FC } from "react";

export const LinksPanel: FC = () => {
    return (
        <div className="center justify-between justify-content w-1/2 gap-4 p-4">
            <div className="flex flex-row justify-between">
                <button className="bg-green-500 p-2 rounded shadow">On</button>
                <button className="bg-green-500 p-2 rounded shadow">Off</button>
            </div>
        </div>
    );
}