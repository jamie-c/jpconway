import Link from "next/link";

const Logo = () => {
    return (
    <div className="ml-4">
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#51AE8A] to-[#8A51AE] hover:text-[#2F2F30]">
            <Link 
                href="../index.html"
            >
                Jamie Conway!
            </Link>
        </h1>
    </div>
    );
};

export default Logo;