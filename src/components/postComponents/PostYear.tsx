import dayjs from "dayjs"

const PostYear = ({ date }: { date: string}) => {
    const year = dayjs(date).year()

    return (
        <div className="text-[#8A51AE] text-4xl font-medium">
            {year}
        </div>
    )
}

export default PostYear