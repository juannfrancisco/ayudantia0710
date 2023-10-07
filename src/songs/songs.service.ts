import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {

  constructor( @InjectRepository(Song)
  private songRepository : Repository<Song> ) {}

  create(createSongDto: CreateSongDto) {
    let song = new Song();
    song.title = createSongDto.title;
    song.artist = createSongDto.artist;
    song.album = createSongDto.album;
    song.year = createSongDto.year;
    return this.songRepository.save(song); // INSERT INTO songs (title, artist, album, year) VALUES (createSongDto.title, createSongDto.artist, createSongDto.album, createSongDto.year);
  }

  findAll(): Promise<Song[]> {
    return this.songRepository.find(); // SELECT * FROM songs;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
