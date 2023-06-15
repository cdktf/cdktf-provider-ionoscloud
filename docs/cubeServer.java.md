# `ionoscloud_cube_server`

Refer to the Terraform Registory for docs: [`ionoscloud_cube_server`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server).

# `cubeServer` Submodule <a name="`cubeServer` Submodule" id="@cdktf/provider-ionoscloud.cubeServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CubeServer <a name="CubeServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server ionoscloud_cube_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServer;

CubeServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
    .nic(CubeServerNic)
    .templateUuid(java.lang.String)
    .volume(CubeServerVolume)
//  .availabilityZone(java.lang.String)
//  .bootCdrom(java.lang.String)
//  .bootImage(java.lang.String)
//  .id(java.lang.String)
//  .imageName(java.lang.String)
//  .imagePassword(java.lang.String)
//  .sshKeyPath(java.util.List<java.lang.String>)
//  .timeouts(CubeServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#template_uuid CubeServer#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootCdrom">bootCdrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootImage">bootImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_image CubeServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#id CubeServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_name CubeServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}.

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.nic"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#nic CubeServer#nic}

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.templateUuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#template_uuid CubeServer#template_uuid}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#volume CubeServer#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `bootCdrom`<sup>Optional</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootCdrom"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}.

---

##### `bootImage`<sup>Optional</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootImage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_image CubeServer#boot_image}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#id CubeServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_name CubeServer#image_name}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imagePassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.sshKeyPath"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#timeouts CubeServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic">putNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom">resetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage">resetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath">resetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNic` <a name="putNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic"></a>

```java
public void putNic(CubeServerNic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts"></a>

```java
public void putTimeouts(CubeServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume"></a>

```java
public void putVolume(CubeServerVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBootCdrom` <a name="resetBootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom"></a>

```java
public void resetBootCdrom()
```

##### `resetBootImage` <a name="resetBootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage"></a>

```java
public void resetBootImage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId"></a>

```java
public void resetId()
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword"></a>

```java
public void resetImagePassword()
```

##### `resetSshKeyPath` <a name="resetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath"></a>

```java
public void resetSshKeyPath()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServer;

CubeServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServer;

CubeServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServer;

CubeServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume">bootVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId">firewallruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp">primaryIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic">primaryNic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput">bootCdromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput">bootImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput">imagePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput">nicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput">sshKeyPathInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput">templateUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom">bootCdrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage">bootImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bootVolume`<sup>Required</sup> <a name="bootVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume"></a>

```java
public java.lang.String getBootVolume();
```

- *Type:* java.lang.String

---

##### `firewallruleId`<sup>Required</sup> <a name="firewallruleId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId"></a>

```java
public java.lang.String getFirewallruleId();
```

- *Type:* java.lang.String

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic"></a>

```java
public CubeServerNicOutputReference getNic();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a>

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp"></a>

```java
public java.lang.String getPrimaryIp();
```

- *Type:* java.lang.String

---

##### `primaryNic`<sup>Required</sup> <a name="primaryNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic"></a>

```java
public java.lang.String getPrimaryNic();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts"></a>

```java
public CubeServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume"></a>

```java
public CubeServerVolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `bootCdromInput`<sup>Optional</sup> <a name="bootCdromInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput"></a>

```java
public java.lang.String getBootCdromInput();
```

- *Type:* java.lang.String

---

##### `bootImageInput`<sup>Optional</sup> <a name="bootImageInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput"></a>

```java
public java.lang.String getBootImageInput();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput"></a>

```java
public java.lang.String getImagePasswordInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nicInput`<sup>Optional</sup> <a name="nicInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput"></a>

```java
public CubeServerNic getNicInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `sshKeyPathInput`<sup>Optional</sup> <a name="sshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput"></a>

```java
public java.util.List<java.lang.String> getSshKeyPathInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateUuidInput`<sup>Optional</sup> <a name="templateUuidInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput"></a>

```java
public java.lang.String getTemplateUuidInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput"></a>

```java
public CubeServerVolume getVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `bootCdrom`<sup>Required</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom"></a>

```java
public java.lang.String getBootCdrom();
```

- *Type:* java.lang.String

---

##### `bootImage`<sup>Required</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage"></a>

```java
public java.lang.String getBootImage();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sshKeyPath`<sup>Required</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid"></a>

```java
public java.lang.String getTemplateUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CubeServerConfig <a name="CubeServerConfig" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerConfig;

CubeServerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
    .nic(CubeServerNic)
    .templateUuid(java.lang.String)
    .volume(CubeServerVolume)
//  .availabilityZone(java.lang.String)
//  .bootCdrom(java.lang.String)
//  .bootImage(java.lang.String)
//  .id(java.lang.String)
//  .imageName(java.lang.String)
//  .imagePassword(java.lang.String)
//  .sshKeyPath(java.util.List<java.lang.String>)
//  .timeouts(CubeServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#template_uuid CubeServer#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom">bootCdrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage">bootImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_image CubeServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#id CubeServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_name CubeServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}.

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic"></a>

```java
public CubeServerNic getNic();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#nic CubeServer#nic}

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid"></a>

```java
public java.lang.String getTemplateUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#template_uuid CubeServer#template_uuid}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume"></a>

```java
public CubeServerVolume getVolume();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#volume CubeServer#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `bootCdrom`<sup>Optional</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom"></a>

```java
public java.lang.String getBootCdrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}.

---

##### `bootImage`<sup>Optional</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage"></a>

```java
public java.lang.String getBootImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#boot_image CubeServer#boot_image}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#id CubeServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_name CubeServer#image_name}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts"></a>

```java
public CubeServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#timeouts CubeServer#timeouts}

---

### CubeServerNic <a name="CubeServerNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerNic;

CubeServerNic.builder()
    .lan(java.lang.Number)
//  .dhcp(java.lang.Boolean)
//  .dhcp(IResolvable)
//  .firewall(CubeServerNicFirewall)
//  .firewallActive(java.lang.Boolean)
//  .firewallActive(IResolvable)
//  .firewallType(java.lang.String)
//  .ips(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan">lan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#lan CubeServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#dhcp CubeServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive">firewallActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#firewall_active CubeServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#firewall_type CubeServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ips CubeServer#ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan"></a>

```java
public java.lang.Number getLan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#lan CubeServer#lan}.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#dhcp CubeServer#dhcp}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall"></a>

```java
public CubeServerNicFirewall getFirewall();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#firewall CubeServer#firewall}

---

##### `firewallActive`<sup>Optional</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive"></a>

```java
public java.lang.Object getFirewallActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#firewall_active CubeServer#firewall_active}.

---

##### `firewallType`<sup>Optional</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#firewall_type CubeServer#firewall_type}.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ips CubeServer#ips}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}.

---

### CubeServerNicFirewall <a name="CubeServerNicFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerNicFirewall;

CubeServerNicFirewall.builder()
    .protocol(java.lang.String)
//  .icmpCode(java.lang.String)
//  .icmpType(java.lang.String)
//  .name(java.lang.String)
//  .portRangeEnd(java.lang.Number)
//  .portRangeStart(java.lang.Number)
//  .sourceIp(java.lang.String)
//  .sourceMac(java.lang.String)
//  .targetIp(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#protocol CubeServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode">icmpCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#icmp_code CubeServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#icmp_type CubeServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#port_range_end CubeServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#port_range_start CubeServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#source_ip CubeServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#source_mac CubeServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp">targetIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#target_ip CubeServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#type CubeServer#type}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#protocol CubeServer#protocol}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode"></a>

```java
public java.lang.String getIcmpCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#icmp_code CubeServer#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#icmp_type CubeServer#icmp_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}.

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd"></a>

```java
public java.lang.Number getPortRangeEnd();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#port_range_end CubeServer#port_range_end}.

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart"></a>

```java
public java.lang.Number getPortRangeStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#port_range_start CubeServer#port_range_start}.

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#source_ip CubeServer#source_ip}.

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac"></a>

```java
public java.lang.String getSourceMac();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#source_mac CubeServer#source_mac}.

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp"></a>

```java
public java.lang.String getTargetIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#target_ip CubeServer#target_ip}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#type CubeServer#type}.

---

### CubeServerTimeouts <a name="CubeServerTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerTimeouts;

CubeServerTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#create CubeServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#default CubeServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#delete CubeServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#update CubeServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#create CubeServer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#default CubeServer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#delete CubeServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#update CubeServer#update}.

---

### CubeServerVolume <a name="CubeServerVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerVolume;

CubeServerVolume.builder()
    .diskType(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .backupUnitId(java.lang.String)
//  .bus(java.lang.String)
//  .imagePassword(java.lang.String)
//  .licenceType(java.lang.String)
//  .name(java.lang.String)
//  .sshKeyPath(java.util.List<java.lang.String>)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#disk_type CubeServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId">backupUnitId</a></code> | <code>java.lang.String</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus">bus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#bus CubeServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#licence_type CubeServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData">userData</a></code> | <code>java.lang.String</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#disk_type CubeServer#disk_type}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `backupUnitId`<sup>Optional</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId"></a>

```java
public java.lang.String getBackupUnitId();
```

- *Type:* java.lang.String

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#backup_unit_id CubeServer#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus"></a>

```java
public java.lang.String getBus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#bus CubeServer#bus}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `licenceType`<sup>Optional</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#licence_type CubeServer#licence_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#name CubeServer#name}.

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/cube_server#user_data CubeServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### CubeServerNicFirewallOutputReference <a name="CubeServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerNicFirewallOutputReference;

new CubeServerNicFirewallOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd">resetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart">resetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac">resetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode"></a>

```java
public void resetIcmpCode()
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType"></a>

```java
public void resetIcmpType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPortRangeEnd` <a name="resetPortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```java
public void resetPortRangeEnd()
```

##### `resetPortRangeStart` <a name="resetPortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart"></a>

```java
public void resetPortRangeStart()
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp"></a>

```java
public void resetSourceIp()
```

##### `resetSourceMac` <a name="resetSourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac"></a>

```java
public void resetSourceMac()
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp"></a>

```java
public void resetTargetIp()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput">portRangeEndInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput">portRangeStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput">sourceMacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput">targetIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode">icmpCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp">targetIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```java
public java.lang.String getIcmpCodeInput();
```

- *Type:* java.lang.String

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```java
public java.lang.String getIcmpTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portRangeEndInput`<sup>Optional</sup> <a name="portRangeEndInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```java
public java.lang.Number getPortRangeEndInput();
```

- *Type:* java.lang.Number

---

##### `portRangeStartInput`<sup>Optional</sup> <a name="portRangeStartInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```java
public java.lang.Number getPortRangeStartInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput"></a>

```java
public java.lang.String getSourceIpInput();
```

- *Type:* java.lang.String

---

##### `sourceMacInput`<sup>Optional</sup> <a name="sourceMacInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput"></a>

```java
public java.lang.String getSourceMacInput();
```

- *Type:* java.lang.String

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput"></a>

```java
public java.lang.String getTargetIpInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode"></a>

```java
public java.lang.String getIcmpCode();
```

- *Type:* java.lang.String

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd"></a>

```java
public java.lang.Number getPortRangeEnd();
```

- *Type:* java.lang.Number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart"></a>

```java
public java.lang.Number getPortRangeStart();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac"></a>

```java
public java.lang.String getSourceMac();
```

- *Type:* java.lang.String

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp"></a>

```java
public java.lang.String getTargetIp();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue"></a>

```java
public CubeServerNicFirewall getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---


### CubeServerNicOutputReference <a name="CubeServerNicOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerNicOutputReference;

new CubeServerNicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall">putFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive">resetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType">resetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall"></a>

```java
public void putFirewall(CubeServerNicFirewall value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp"></a>

```java
public void resetDhcp()
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall"></a>

```java
public void resetFirewall()
```

##### `resetFirewallActive` <a name="resetFirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive"></a>

```java
public void resetFirewallActive()
```

##### `resetFirewallType` <a name="resetFirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType"></a>

```java
public void resetFirewallType()
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps"></a>

```java
public void resetIps()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac">mac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot">pciSlot</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput">dhcpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput">firewallActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput">firewallInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput">firewallTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput">ipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput">lanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive">firewallActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan">lan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber"></a>

```java
public java.lang.Number getDeviceNumber();
```

- *Type:* java.lang.Number

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall"></a>

```java
public CubeServerNicFirewallOutputReference getFirewall();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a>

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac"></a>

```java
public java.lang.String getMac();
```

- *Type:* java.lang.String

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot"></a>

```java
public java.lang.Number getPciSlot();
```

- *Type:* java.lang.Number

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput"></a>

```java
public java.lang.Object getDhcpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallActiveInput`<sup>Optional</sup> <a name="firewallActiveInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput"></a>

```java
public java.lang.Object getFirewallActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput"></a>

```java
public CubeServerNicFirewall getFirewallInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput"></a>

```java
public java.lang.String getFirewallTypeInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput"></a>

```java
public java.util.List<java.lang.String> getIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lanInput`<sup>Optional</sup> <a name="lanInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput"></a>

```java
public java.lang.Number getLanInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallActive`<sup>Required</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive"></a>

```java
public java.lang.Object getFirewallActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan"></a>

```java
public java.lang.Number getLan();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue"></a>

```java
public CubeServerNic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---


### CubeServerTimeoutsOutputReference <a name="CubeServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerTimeoutsOutputReference;

new CubeServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---


### CubeServerVolumeOutputReference <a name="CubeServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.cube_server.CubeServerVolumeOutputReference;

new CubeServerVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId">resetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus">resetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType">resetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath">resetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBackupUnitId` <a name="resetBackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId"></a>

```java
public void resetBackupUnitId()
```

##### `resetBus` <a name="resetBus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus"></a>

```java
public void resetBus()
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword"></a>

```java
public void resetImagePassword()
```

##### `resetLicenceType` <a name="resetLicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType"></a>

```java
public void resetLicenceType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSshKeyPath` <a name="resetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath"></a>

```java
public void resetSshKeyPath()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData"></a>

```java
public void resetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer">bootServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug">cpuHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug">nicHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug">nicHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot">pciSlot</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug">ramHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput">backupUnitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput">busInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput">imagePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput">licenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput">sshKeyPathInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId">backupUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus">bus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootServer`<sup>Required</sup> <a name="bootServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer"></a>

```java
public java.lang.String getBootServer();
```

- *Type:* java.lang.String

---

##### `cpuHotPlug`<sup>Required</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug"></a>

```java
public IResolvable getCpuHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber"></a>

```java
public java.lang.Number getDeviceNumber();
```

- *Type:* java.lang.Number

---

##### `discVirtioHotPlug`<sup>Required</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```java
public IResolvable getDiscVirtioHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discVirtioHotUnplug`<sup>Required</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```java
public IResolvable getDiscVirtioHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nicHotPlug`<sup>Required</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug"></a>

```java
public IResolvable getNicHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nicHotUnplug`<sup>Required</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug"></a>

```java
public IResolvable getNicHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot"></a>

```java
public java.lang.Number getPciSlot();
```

- *Type:* java.lang.Number

---

##### `ramHotPlug`<sup>Required</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug"></a>

```java
public IResolvable getRamHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `backupUnitIdInput`<sup>Optional</sup> <a name="backupUnitIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput"></a>

```java
public java.lang.String getBackupUnitIdInput();
```

- *Type:* java.lang.String

---

##### `busInput`<sup>Optional</sup> <a name="busInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput"></a>

```java
public java.lang.String getBusInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput"></a>

```java
public java.lang.String getImagePasswordInput();
```

- *Type:* java.lang.String

---

##### `licenceTypeInput`<sup>Optional</sup> <a name="licenceTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput"></a>

```java
public java.lang.String getLicenceTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sshKeyPathInput`<sup>Optional</sup> <a name="sshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput"></a>

```java
public java.util.List<java.lang.String> getSshKeyPathInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `backupUnitId`<sup>Required</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId"></a>

```java
public java.lang.String getBackupUnitId();
```

- *Type:* java.lang.String

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus"></a>

```java
public java.lang.String getBus();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

---

##### `licenceType`<sup>Required</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sshKeyPath`<sup>Required</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue"></a>

```java
public CubeServerVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---



