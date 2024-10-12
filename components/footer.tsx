// import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

export function Footer () {
  return (
    <div className="bg-background py-6">
        <div className="mx-auto container text-center">
            Made with ❤️ by <LinkPreview url="https://www.linkedin.com/in/adwaith-athman/" className="text-foreground ml-1 hover:underline">Adwaith Athman</LinkPreview>
        </div>
    </div>
  )
}
