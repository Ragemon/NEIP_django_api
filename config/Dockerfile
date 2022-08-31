##############
#    build   #
##############

#base image
FROM python:3.9-alpine3.15 as builder

#maintainer
LABEL Author="CJdotdev"

ENV PYTHONBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

#directory to store app source code
RUN mkdir /app

#swtich to /app directory so that everything runs from here
WORKDIR /app

#copy the app code to image working directory
COPY ./app /app

#let pip install required packages
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r -requirements.txt

###########
#  FINAL  #
###########


# installing netcat (nc) since we are using that to 
#listen to postgres server entrypoint.sh
RUN apt-get update && apt-get install -y --no-install-recommends netcat && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# install dependencis
COPY --from-builder /app/wheels /wheels/
COPY --from-builder /app/requirements.txt ./
RUN pip install --no-cache /wheels/*

# set work directory
WORKDIR /app

# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh

# copy our django project
COPY ./config . 

# run entrypoint.sh
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]