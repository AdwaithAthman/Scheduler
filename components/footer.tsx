import Link from "next/link";

export function Footer () {
  return (
    <div className="bg-background py-6">
        <div className="mx-auto container text-center">
            Made with ❤️ by <Link href="https://twitter.com/0xSatoshi" target="_blank" rel="noreferrer" className="text-foreground hover:underline">Adwaith Athman</Link>
        </div>
    </div>
  )
}
