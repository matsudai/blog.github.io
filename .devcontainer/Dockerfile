FROM node:16-buster

RUN apt update && apt install -y vim && apt clean

# 日本語に対応する
# 1. localeがない（locale -a）ためja_JP.UTF-8を生成する
# 2. LANG
# # 3. LANGUAGEを設定する
# # 4. デフォルトロケールを変更する（2.、3. を実施していない場合エラー）
# # 5. LC_ALLを設定する（4. を実施していない場合エラー）
RUN apt-get install -y locales && \
    apt clean && \
    locale-gen ja_JP.UTF-8 && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
# ENV LANGUAGE ja_JP:ja
# RUN update-locale LANG=ja_JP.UTF-8
# ENV LC_ALL ja_JP.UTF-8
