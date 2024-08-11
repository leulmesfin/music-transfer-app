import { Button, Card, CardProps, H2, Paragraph, XStack, Image } from '@my/ui'
import { useState } from 'react'
import { X } from '@tamagui/lucide-icons'

interface MusicCardProps extends CardProps {
  name: string
  uri: string
}

const MusicCard = ({ name, uri, ...props }: MusicCardProps) => {
  const [selectState, setSelect] = useState<boolean>(false)

  const changeState = () => {
    setSelect(!selectState)
  }
  return (
    <Card
      elevate
      size="$1"
      bordered
      {...props}
      backgroundColor={selectState ? '$blue7Light' : undefined}
    >
      <Card.Header padded>
        <H2>{name}</H2>
        {/* <Paragraph theme="alt2">Now available</Paragraph> */}
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button
          borderRadius="$10"
          width={'$10'}
          onPress={changeState}
          icon={selectState ? X : undefined}
        >
          {selectState ? '' : 'Select'}
        </Button>
      </Card.Footer>
      <Card.Background justifyContent="center">
        <Image
          resizeMode="cover"
          alignSelf="center"
          mt="$5"
          source={{
            width: 200,
            height: 200,
            uri: uri,
          }}
        />
      </Card.Background>
    </Card>
  )
}
export default MusicCard
