import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return const MatchingApp();
  }
}

class MatchingApp extends StatelessWidget {
  const MatchingApp({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Janwar Pechano - Identify the animal by the sound!',
      theme: ThemeData.from(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.grey.shade400),
        useMaterial3: true,
      ),
      home: const AppScreen(),
    );
  }
}

class AppScreen extends StatelessWidget {
  const AppScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: const [
        SafeArea(
          child: PlayScreen(),
        ),
      ],
    );
  }
}

class PlayScreen extends StatefulWidget {
  const PlayScreen({super.key});

  @override
  State<PlayScreen> createState() => _PlayScreenState();
}

class _PlayScreenState extends State<PlayScreen> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Card(
            color: Theme.of(context).colorScheme.onPrimary,
            child: TextButton(
              onPressed: () {
                final player = AudioPlayer();

                player.play(
                  AssetSource('sounds/cat.mp3'),
                  mode: PlayerMode.lowLatency,
                );
                
              },
              child: const Icon(
                Icons.play_arrow,
                size: 200,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
