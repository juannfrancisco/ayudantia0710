import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import { Song } from './songs/entities/song.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'backend',
      database: 'playlist_db',
      entities: [ Song ],
      synchronize: true,
    }),
    SongsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
