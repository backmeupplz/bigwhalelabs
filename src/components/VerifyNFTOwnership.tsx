import { HeaderText } from 'components/Text'
import Button from 'components/Button'
import Card from 'components/Card'
import OrbSeal from 'components/OrbSeal'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-x-12')
)
const textAndButton = space('space-y-6')
export default function () {
  const { lg } = useBreakpoints()

  return (
    <Card>
      <div className={container}>
        <OrbSeal />
        <div className={textAndButton}>
          <HeaderText textSize={lg ? 'base' : 'small'}>
            Verify NFT ownership while remaining anonymous
          </HeaderText>
          <Button outlined>Do this with SealCred</Button>
        </div>
      </div>
    </Card>
  )
}
