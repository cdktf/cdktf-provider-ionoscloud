# `provider`

Refer to the Terraform Registory for docs: [`ionoscloud`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ionoscloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IonoscloudProvider <a name="IonoscloudProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs ionoscloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.provider.IonoscloudProvider;

IonoscloudProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .endpoint(java.lang.String)
//  .password(java.lang.String)
//  .retries(java.lang.Number)
//  .token(java.lang.String)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | IonosCloud REST API URL. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | IonosCloud password for API operations. If token is provided, token is preferred. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#retries IonoscloudProvider#retries}. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | IonosCloud bearer token for API operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | IonosCloud username for API operations. If token is provided, token is preferred. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#alias IonoscloudProvider#alias}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

IonosCloud REST API URL.

Usually not necessary to be set, SDKs know internally how to route requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#endpoint IonoscloudProvider#endpoint}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

IonosCloud password for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#password IonoscloudProvider#password}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#retries IonoscloudProvider#retries}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

IonosCloud bearer token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#token IonoscloudProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.username"></a>

- *Type:* java.lang.String

IonosCloud username for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#username IonoscloudProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.provider.IonoscloudProvider;

IonoscloudProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.provider.IonoscloudProvider;

IonoscloudProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.provider.IonoscloudProvider;

IonoscloudProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IonoscloudProviderConfig <a name="IonoscloudProviderConfig" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.provider.IonoscloudProviderConfig;

IonoscloudProviderConfig.builder()
//  .alias(java.lang.String)
//  .endpoint(java.lang.String)
//  .password(java.lang.String)
//  .retries(java.lang.Number)
//  .token(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | IonosCloud REST API URL. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | IonosCloud password for API operations. If token is provided, token is preferred. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#retries IonoscloudProvider#retries}. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | IonosCloud bearer token for API operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username">username</a></code> | <code>java.lang.String</code> | IonosCloud username for API operations. If token is provided, token is preferred. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#alias IonoscloudProvider#alias}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

IonosCloud REST API URL.

Usually not necessary to be set, SDKs know internally how to route requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#endpoint IonoscloudProvider#endpoint}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

IonosCloud password for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#password IonoscloudProvider#password}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#retries IonoscloudProvider#retries}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

IonosCloud bearer token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#token IonoscloudProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

IonosCloud username for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.5/docs#username IonoscloudProvider#username}

---



