import { atom, selector } from "recoil";
import axios from "axios";
export const notifications = atom({
    key: "asyncnetworkAtom",
    default: selector({
        key:"networkAtomSelector",
        get:async()=>{
            new Promise(se)
            const res=await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "asynctotalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})