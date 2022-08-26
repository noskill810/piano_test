export const Button = () => {
    const clickAlert = () => alert(111);
    return (
        <>
            <button onClick={clickAlert}>xxボタン</button>
        </>
    )
}