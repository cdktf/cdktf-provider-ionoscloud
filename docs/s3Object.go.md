# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-ionoscloud.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-ionoscloud.s3Object.S3Object"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object ionoscloud_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3object"

s3object.NewS3Object(scope Construct, id *string, config S3ObjectConfig) S3Object
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig">S3ObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig">S3ObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires">ResetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa">ResetMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold">ResetObjectLockLegalHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode">ResetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate">ResetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer">ResetRequestPayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext">ResetServerSideEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm">ResetServerSideEncryptionCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey">ResetServerSideEncryptionCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5">ResetServerSideEncryptionCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect">ResetWebsiteRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage"></a>

```go
func ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetExpires` <a name="ResetExpires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires"></a>

```go
func ResetExpires()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMfa` <a name="ResetMfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa"></a>

```go
func ResetMfa()
```

##### `ResetObjectLockLegalHold` <a name="ResetObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold"></a>

```go
func ResetObjectLockLegalHold()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode"></a>

```go
func ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```go
func ResetObjectLockRetainUntilDate()
```

##### `ResetRequestPayer` <a name="ResetRequestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer"></a>

```go
func ResetRequestPayer()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption"></a>

```go
func ResetServerSideEncryption()
```

##### `ResetServerSideEncryptionContext` <a name="ResetServerSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext"></a>

```go
func ResetServerSideEncryptionContext()
```

##### `ResetServerSideEncryptionCustomerAlgorithm` <a name="ResetServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm"></a>

```go
func ResetServerSideEncryptionCustomerAlgorithm()
```

##### `ResetServerSideEncryptionCustomerKey` <a name="ResetServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey"></a>

```go
func ResetServerSideEncryptionCustomerKey()
```

##### `ResetServerSideEncryptionCustomerKeyMd5` <a name="ResetServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5"></a>

```go
func ResetServerSideEncryptionCustomerKeyMd5()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource"></a>

```go
func ResetSource()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass"></a>

```go
func ResetStorageClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect"></a>

```go
func ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3object"

s3object.S3Object_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3object"

s3object.S3Object_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3object"

s3object.S3Object_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3object"

s3object.S3Object_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3Object to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3Object that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3Object to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput">ExpiresInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput">MfaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput">ObjectLockLegalHoldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput">RequestPayerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput">ServerSideEncryptionContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput">ServerSideEncryptionCustomerAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput">ServerSideEncryptionCustomerKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input">ServerSideEncryptionCustomerKeyMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa">Mfa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold">ObjectLockLegalHold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer">RequestPayer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext">ServerSideEncryptionContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm">ServerSideEncryptionCustomerAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey">ServerSideEncryptionCustomerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5">ServerSideEncryptionCustomerKeyMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput"></a>

```go
func ContentLanguageInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `ExpiresInput`<sup>Optional</sup> <a name="ExpiresInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput"></a>

```go
func ExpiresInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MfaInput`<sup>Optional</sup> <a name="MfaInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput"></a>

```go
func MfaInput() *string
```

- *Type:* *string

---

##### `ObjectLockLegalHoldInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput"></a>

```go
func ObjectLockLegalHoldInput() *string
```

- *Type:* *string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput"></a>

```go
func ObjectLockModeInput() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```go
func ObjectLockRetainUntilDateInput() *string
```

- *Type:* *string

---

##### `RequestPayerInput`<sup>Optional</sup> <a name="RequestPayerInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput"></a>

```go
func RequestPayerInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionContextInput`<sup>Optional</sup> <a name="ServerSideEncryptionContextInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput"></a>

```go
func ServerSideEncryptionContextInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerAlgorithmInput`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```go
func ServerSideEncryptionCustomerAlgorithmInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKeyInput`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput"></a>

```go
func ServerSideEncryptionCustomerKeyInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKeyMd5Input`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```go
func ServerSideEncryptionCustomerKeyMd5Input() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```go
func ServerSideEncryptionInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput"></a>

```go
func WebsiteRedirectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Mfa`<sup>Required</sup> <a name="Mfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa"></a>

```go
func Mfa() *string
```

- *Type:* *string

---

##### `ObjectLockLegalHold`<sup>Required</sup> <a name="ObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold"></a>

```go
func ObjectLockLegalHold() *string
```

- *Type:* *string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode"></a>

```go
func ObjectLockMode() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```go
func ObjectLockRetainUntilDate() *string
```

- *Type:* *string

---

##### `RequestPayer`<sup>Required</sup> <a name="RequestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer"></a>

```go
func RequestPayer() *string
```

- *Type:* *string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption"></a>

```go
func ServerSideEncryption() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionContext`<sup>Required</sup> <a name="ServerSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext"></a>

```go
func ServerSideEncryptionContext() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerAlgorithm`<sup>Required</sup> <a name="ServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm"></a>

```go
func ServerSideEncryptionCustomerAlgorithm() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKey`<sup>Required</sup> <a name="ServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey"></a>

```go
func ServerSideEncryptionCustomerKey() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKeyMd5`<sup>Required</sup> <a name="ServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5"></a>

```go
func ServerSideEncryptionCustomerKeyMd5() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect"></a>

```go
func WebsiteRedirect() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3object"

&s3object.S3ObjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Key: *string,
	CacheControl: *string,
	Content: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentLanguage: *string,
	ContentType: *string,
	Expires: *string,
	ForceDestroy: interface{},
	Metadata: *map[string]*string,
	Mfa: *string,
	ObjectLockLegalHold: *string,
	ObjectLockMode: *string,
	ObjectLockRetainUntilDate: *string,
	RequestPayer: *string,
	ServerSideEncryption: *string,
	ServerSideEncryptionContext: *string,
	ServerSideEncryptionCustomerAlgorithm: *string,
	ServerSideEncryptionCustomerKey: *string,
	ServerSideEncryptionCustomerKeyMd5: *string,
	Source: *string,
	StorageClass: *string,
	Tags: *map[string]*string,
	WebsiteRedirect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key">Key</a></code> | <code>*string</code> | The key of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content">Content</a></code> | <code>*string</code> | The utf-8 content of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Specifies presentational information for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | The natural language or languages of the intended audience for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType">ContentType</a></code> | <code>*string</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires">Expires</a></code> | <code>*string</code> | The date and time at which the object is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Specifies whether to delete the object even if it has a governance-type Object Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | A map of metadata to store with the object in IONOS Object Storage Object Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa">Mfa</a></code> | <code>*string</code> | The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold">ObjectLockLegalHold</a></code> | <code>*string</code> | Specifies whether a legal hold will be applied to this object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | The date and time when you want this object's Object Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer">RequestPayer</a></code> | <code>*string</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext">ServerSideEncryptionContext</a></code> | <code>*string</code> | Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm">ServerSideEncryptionCustomerAlgorithm</a></code> | <code>*string</code> | Specifies the algorithm to use to when encrypting the object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey">ServerSideEncryptionCustomerKey</a></code> | <code>*string</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5">ServerSideEncryptionCustomerKeyMd5</a></code> | <code>*string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source">Source</a></code> | <code>*string</code> | The path to the file to upload. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | The storage class of the object. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tag-set for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#bucket S3Object#bucket}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#key S3Object#key}

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#cache_control S3Object#cache_control}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

The utf-8 content of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#content S3Object#content}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Specifies presentational information for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#content_disposition S3Object#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#content_encoding S3Object#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```go
ContentLanguage *string
```

- *Type:* *string

The natural language or languages of the intended audience for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#content_language S3Object#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#content_type S3Object#content_type}

---

##### `Expires`<sup>Optional</sup> <a name="Expires" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires"></a>

```go
Expires *string
```

- *Type:* *string

The date and time at which the object is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#expires S3Object#expires}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Specifies whether to delete the object even if it has a governance-type Object Lock in place.

You must explicitly pass a value of true for this parameter to delete the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#force_destroy S3Object#force_destroy}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

A map of metadata to store with the object in IONOS Object Storage Object Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#metadata S3Object#metadata}

---

##### `Mfa`<sup>Optional</sup> <a name="Mfa" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa"></a>

```go
Mfa *string
```

- *Type:* *string

The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.

Required to permanently delete a versioned object if versioning is configured with MFA Delete enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#mfa S3Object#mfa}

---

##### `ObjectLockLegalHold`<sup>Optional</sup> <a name="ObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold"></a>

```go
ObjectLockLegalHold *string
```

- *Type:* *string

Specifies whether a legal hold will be applied to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#object_lock_legal_hold S3Object#object_lock_legal_hold}

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```go
ObjectLockMode *string
```

- *Type:* *string

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```go
ObjectLockRetainUntilDate *string
```

- *Type:* *string

The date and time when you want this object's Object Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}

---

##### `RequestPayer`<sup>Optional</sup> <a name="RequestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer"></a>

```go
RequestPayer *string
```

- *Type:* *string

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#request_payer S3Object#request_payer}

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```go
ServerSideEncryption *string
```

- *Type:* *string

The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}

---

##### `ServerSideEncryptionContext`<sup>Optional</sup> <a name="ServerSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext"></a>

```go
ServerSideEncryptionContext *string
```

- *Type:* *string

Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption.

The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#server_side_encryption_context S3Object#server_side_encryption_context}

---

##### `ServerSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```go
ServerSideEncryptionCustomerAlgorithm *string
```

- *Type:* *string

Specifies the algorithm to use to when encrypting the object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#server_side_encryption_customer_algorithm S3Object#server_side_encryption_customer_algorithm}

---

##### `ServerSideEncryptionCustomerKey`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey"></a>

```go
ServerSideEncryptionCustomerKey *string
```

- *Type:* *string

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#server_side_encryption_customer_key S3Object#server_side_encryption_customer_key}

---

##### `ServerSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```go
ServerSideEncryptionCustomerKeyMd5 *string
```

- *Type:* *string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#server_side_encryption_customer_key_md5 S3Object#server_side_encryption_customer_key_md5}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

The path to the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#source S3Object#source}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The storage class of the object. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#storage_class S3Object#storage_class}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tag-set for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#tags S3Object#tags}

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```go
WebsiteRedirect *string
```

- *Type:* *string

If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL.

IONOS Object Storage Object Storage stores the value of this header in the object metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/s3_object#website_redirect S3Object#website_redirect}

---



