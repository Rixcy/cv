export const Container: React.VFC<{ children: React.ReactNode }> = ({
    children,
}): React.ReactElement => {
    return (
        <div className="max-w-4xl w-full mx-auto bg-gradient-to-br from-nord4 to-nord9 h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] relative shadow-xl">
            <div className="p-5 sm:p-7 md:p-10 bg-nord5 opacity-100 absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] md:h-[calc(100%-2.5rem)] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-2.5rem)] overflow-y-auto">
                {children}
            </div>
        </div>
    )
}
