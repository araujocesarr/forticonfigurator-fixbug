export default function Policy() {
  return (
`#deactivates SIP ALG
config voip profile
  edit default
  config sip
  set status disable
  set rtp disable
  end
  next
end`
  )
}