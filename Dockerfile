FROM node:24-bookworm-slim AS base


FROM base AS deps

ARG USERNAME=shunya.sato
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# コンテナ作者が残しているユーザーを封印する
RUN groupmod -g 12345 node && \
    usermod -u 12345 -g 12345 node
# UIDがホスト側と同一になるようにする
# セットアップ
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update && apt-get install -y \
    git \
    sudo \
    curl \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME


USER $USERNAME

# ワークスペースディレクトリを作成
WORKDIR /workspace
# タイムゾーンを設定
ENV TZ=Asia/Tokyo
