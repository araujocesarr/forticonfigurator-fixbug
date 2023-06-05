export default function VPNUser() {
  return (
    `#SDAG Standart VPN User:
    config user local
        edit "sdag"
            set type password
            set passwd testpw
        next
    end`
  )
}