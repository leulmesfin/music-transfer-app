import { Button, H1, Paragraph, XStack, XStackProps, YStack, Text } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useParams, useRouter } from 'solito/navigation'
import MusicCard from './MusicCard'
import { useState } from 'react'

type Playlist = {
  name: string
  uri: string
}

const playlist1: Playlist = {
  name: 'Reggaeton',
  uri: '/bunny.jpg',
}
const playlist2: Playlist = {
  name: 'R&B',
  uri: '/blonde.jpg',
}
const playlist3: Playlist = {
  name: 'Country',
  uri: '/shelton.jpg',
}
const playlist4: Playlist = {
  name: 'Rap',
  uri: '/future.jpg',
}
const playlist5: Playlist = {
  name: 'Metal',
  uri: '/maiden.jpg',
}
const playlist6: Playlist = {
  name: 'Soul',
  uri: '/adele.jpg',
}
export function UserDetailScreen() {
  const router = useRouter()
  const { id } = useParams()
  const playlists: Array<Playlist> = [playlist1, playlist2, playlist3, playlist4, playlist5, playlist6]
  const xStackLst: Array<string> = []
  const n = Math.ceil(playlists.length / 3) // 3 b/c I want 3 cols of cards per row
  

  // this is a way to allow me to generate n XStacks
  for (let i = 0; i < n; i++) {
    xStackLst.push('hi')
  }
  return (
    <YStack f={1} jc="center" ai="center" gap="$4" bg="$background">
      <H1 ta="center">Playlists</H1>
      {/* <Paragraph ta="center" fow="700" col="$blue10">{`User ID: ${id}`}</Paragraph> */}
      <YStack gap="$4">
        {xStackLst.map((_, row) => (
          <XStack key={row} gap="$4">
            {/* <Text>Mine</Text>
            <Text>Mine</Text>
            <Text>Mine</Text> */}
            {[...playlists.slice((row * 3), ((row * 3) + 3))].map((playlist, col) => (
              <MusicCard 
                key={`[${row}:${col}]`}
                animation="bouncy"
                size="$4"
                width={250}
                height={300}
                scale={0.9}
                hoverStyle={{ scale: 0.925 }}
                pressStyle={{ scale: 0.875 }}
                name={playlist.name}
                uri={playlist.uri}
              />
            ))}
          </XStack>
        ))}
      </YStack>
      {/* <XStack gap="$4">
        {playlists.map((playlist, idx) => 
          (
            <MusicCard 
              key={idx}
              animation="bouncy"
              size="$4"
              width={250}
              height={300}
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              name={playlist.name}
              uri={playlist.uri}
            />
          )
        )}
      </XStack> */}
      <Button backgroundColor={"$red9Light"}>
        Upload to Apple Music
      </Button>
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
    </YStack>
  )
}
