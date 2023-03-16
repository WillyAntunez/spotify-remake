export const generateExpirationDate = (secondsToExpirate: number):string => {
    const now = new Date();
    now.setSeconds(now.getSeconds() + secondsToExpirate);
    const dateString = now.toISOString();

    return dateString;
}